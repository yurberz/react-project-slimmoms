import React from "react";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import getReccomendation from "../../redux/operations/calcOperation";
import { chngUserParam } from "../../redux/operations/logInOperation";
import sprite from "../../svg/elipscomb.svg";
import {
  TitleForm,
  LabelCalc,
  InputCalc,
  WrapCalc,
  LabelRadio,
  InputRadio,
  WrapInput,
  InnerDiv,
  WrapRadio,
  Svg,
  Text,
  Span,
  FormButton,
  Error,
  ErrorBlood,
} from "./calculatorFormStyle";
import { getLoading } from "../../redux/selectors/spinSelector";
import Spin from "../../components/loader/Spin";
import { schema } from "./schemaYup";

const types = [1, 2, 3, 4];

const initialState = {
  weight: "",
  height: "",
  age: "",
  desiredWeight: "",
  bloodType: null,
};

const FormikCalc = ({ getReccomendation, chngUserParam, id, title, spin }) => {
  return (
    <WrapCalc>
      {spin && <Spin />}
      <TitleForm>{title}</TitleForm>
      <Formik
        initialValues={{ ...initialState }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          values = {
            weight: parseInt(values.weight),
            height: parseInt(values.height),
            age: parseInt(values.age),
            desiredWeight: parseInt(values.desiredWeight),
            bloodType: Number(values.bloodType),
          };
          if (!id) {
            getReccomendation({ ...values });
          } else {
            chngUserParam({ ...values }, id);
          }
          actions.resetForm({ ...initialState });
        }}
      >
        {({
          errors,
          touched,
          values,
          handleChange,
          isValid,
          dirty,
          isSubmitting,
        }) => (
          <Form>
            <InnerDiv>
              <WrapInput>
                <LabelCalc>Рост *</LabelCalc>
                <InputCalc
                  name="height"
                  value={values.height}
                  onChange={handleChange}
                />
                <Error component="div" name="height" />
              </WrapInput>
              <WrapInput>
                <LabelCalc>Возраст *</LabelCalc>
                <InputCalc
                  name="age"
                  value={values.age}
                  onChange={handleChange}
                />
                <Error component="div" name="age" />
              </WrapInput>
              <WrapInput>
                <LabelCalc>Текущий вес *</LabelCalc>
                <InputCalc
                  name="weight"
                  value={values.weight}
                  onChange={handleChange}
                />
                <Error component="div" name="weight" />
              </WrapInput>
              <WrapInput>
                <LabelCalc>Желаемый вес *</LabelCalc>
                <InputCalc
                  name="desiredWeight"
                  value={values.desiredWeight}
                  onChange={handleChange}
                />
                <Error component="div" name="desiredWeight" />
              </WrapInput>
              <Text>Группа крови *</Text>
              <WrapRadio role="group" aria-labelledby="my-radio-group">
                {types.map((item) => (
                  <LabelRadio key={item}>
                    <InputRadio
                      key={item}
                      type="radio"
                      name="bloodType"
                      id={item}
                      value={item}
                      checked={values.bloodType == item}
                    />
                    {values.bloodType == item ? (
                      <>
                        <Svg>
                          <use href={sprite + "#icon-elips-combine"} />
                        </Svg>
                        <Span checked>{item}</Span>
                      </>
                    ) : (
                      <>
                        <Svg>
                          <use href={sprite + "#icon-elips-gray"} />
                        </Svg>
                        <Span>{item}</Span>
                      </>
                    )}
                  </LabelRadio>
                ))}
              </WrapRadio>
              <ErrorBlood component="div" name="bloodType" />
            </InnerDiv>

            <FormButton
              type="submit"
              disabled={!isValid && !dirty && isSubmitting}
              shadow={!isValid}
            >
              Похудеть
            </FormButton>
          </Form>
        )}
      </Formik>
    </WrapCalc>
  );
};

const mapDispatchToProps = {
  getReccomendation,
  chngUserParam,
};

const mapStateToProps = (state) => {
  return {
    accessToken: state.LogInReducer.accessToken,
    id: state.LogInReducer.user.id,
    spin: getLoading(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormikCalc);
