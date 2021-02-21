import React from "react";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
} from "./calculatorFormStyle";
import { getLoading } from "../../redux/selectors/spinSelector";
import Spin from "../../components/loader/Spin";

const types = [1, 2, 3, 4];
// const renderProps = Object.keys(types).map((item) => ({
//   value: types[item],
// }));
// types.map((item) => {
//   console.log("item", item);
// });

const initialState = {
  weight: "",
  height: "",
  age: "",
  desiredWeight: "",
  bloodType: null,
};

function validateWeight(value) {
  let error;
  if (!value) {
    error = "Все поля должны быть заполнены";
  } else if (!parseInt(value)) {
    error = "Укажите вес от 20 до 500кг";
  } else if (parseInt(value) < 20 || parseInt(value) > 500) {
    error = "Укажите вес от 20 до 500кг";
  }
  return error;
}
function validateHeight(value) {
  let error;
  if (!value) {
    error = "Все поля должны быть заполнены";
  } else if (!parseInt(value)) {
    error = "Укажите рост от 100 до 250см";
  } else if (parseInt(value) < 100 || parseInt(value) > 250) {
    error = "Укажите рост от 100 до 250см";
  }
  return error;
}
function validateAge(value) {
  let error;
  if (!value) {
    error = "Все поля должны быть заполнены";
  } else if (!parseInt(value)) {
    error = "Укажите возраст от 18 до 100лет";
  } else if (parseInt(value) < 18 || parseInt(value) > 100) {
    error = "Укажите возраст от 18 до 100лет";
  }
  return error;
}

function validateDesireWeight(value) {
  let error;
  if (!value) {
    error = "Все поля должны быть заполнены";
  } else if (!parseInt(value)) {
    error = "Укажите желаемый вес от 20 до 500кг ";
  } else if (parseInt(value) < 18 || parseInt(value) > 500) {
    error = "Укажите желаемый вес от 20 до 500кг ";
  }
  return error;
}

function validateBloodType(value) {
  let error;
  if (!value) {
    error = "Все поля должны быть заполнены";
  }
}

const FormikCalc = ({ getReccomendation, chngUserParam, id, title, spin }) => {
  return (
    <WrapCalc>
      {spin && <Spin />}
      <TitleForm>{title}</TitleForm>
      <Formik
        initialValues={{ ...initialState }}
        onSubmit={(values) => {
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
        }}
        // setFieldValue={(values) => {
        //   console.log("values", values);
        // }}
      >
        {({
          errors,
          touched,
          isValidating,
          validate,
          values,
          handleBlur,
          handleChange,
          setFieldValue,
          handleReset,
        }) => (
          <Form>
            <InnerDiv>
              <WrapInput>
                <LabelCalc>Рост *</LabelCalc>
                <InputCalc
                  name="height"
                  validate={validateHeight}
                  value={values.height}
                  onChange={handleChange}
                />
                {errors.height && touched.height && (
                  <Error>{errors.height}</Error>
                )}
              </WrapInput>
              <WrapInput>
                <LabelCalc>Возраст *</LabelCalc>
                <InputCalc
                  name="age"
                  validate={validateAge}
                  value={values.age}
                  onChange={handleChange}
                />
                {errors.age && touched.age && <Error>{errors.age}</Error>}
              </WrapInput>
              <WrapInput>
                <LabelCalc>Текущий вес *</LabelCalc>
                <InputCalc
                  name="weight"
                  validate={validateWeight}
                  value={values.weight}
                  onChange={handleChange}
                />
                {errors.weight && touched.weight && (
                  <Error>{errors.weight}</Error>
                )}
              </WrapInput>
              <WrapInput>
                <LabelCalc>Желаемый вес *</LabelCalc>
                <InputCalc
                  name="desiredWeight"
                  validate={validateDesireWeight}
                  value={values.desiredWeight}
                  onChange={handleChange}
                />
                {errors.desiredWeight && touched.desiredWeight && (
                  <Error>{errors.desiredWeight}</Error>
                )}
              </WrapInput>
              <Text>Группа крови *</Text>
              <WrapRadio role="group" aria-labelledby="my-radio-group">
                {types.map((item) => (
                  <LabelRadio key={item}>
                    <InputRadio
                      type="radio"
                      name="bloodType"
                      value={item}
                      checked={values.bloodType === item}
                      onChange={() => setFieldValue("bloodType", item)}
                    />
                    {values.bloodType === item ? (
                      <Svg>
                        <use href={sprite + "#icon-elips-combine"} />
                      </Svg>
                    ) : (
                      <Svg>
                        <use href={sprite + "#icon-elips-gray"} />
                      </Svg>
                    )}
                    {item}
                  </LabelRadio>
                ))}
                {/* <LabelRadio>
                  <InputRadio
                    type="radio"
                    name="bloodType"
                    value="1"
                    checked={values.bloodType === "1"}
                    onChange={() => setFieldValue("bloodType", "1")}
                  />
                  {values.bloodType === "1" ? (
                    <Svg checked>
                      <use href={sprite + "#icon-elips-combine"} />
                    </Svg>
                  ) : (
                    <Svg>
                      <use href={sprite + "#icon-elips-gray"} />
                    </Svg>
                  )}
                  1
                </LabelRadio>
                <LabelRadio>
                  <InputRadio type="radio" name="bloodType" value="2" />2
                </LabelRadio>
                <LabelRadio>
                  <InputRadio type="radio" name="bloodType" value="3" />3
                </LabelRadio>
                <LabelRadio>
                  <InputRadio type="radio" name="bloodType" value="4" />4
                </LabelRadio> */}
              </WrapRadio>
            </InnerDiv>
            <FormButton type="submit">Похудеть</FormButton>
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
