// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Formik, Form, Field } from "formik";

// import getReccomendation from "../../redux/operations/calcOperation";
// import { chngUserParam } from "../../redux/operations/logInOperation";
// import { getLoading } from "../../redux/selectors/spinSelector";
// import Spin from "../../components/loader/Spin";

// // import {
// //   TitleForm,
// //   LabelCalc,
// //   InputCalc,
// //   WrapCalc,
// //   LabelRadio,
// //   InputRadio,
// //   WrapInput,
// //   InnerDiv,
// //   WrapRadio,
// //   Svg,
// //   Text,
// //   Span,
// //   FormButton,
// // } from "./calculatorFormStyle";

// function validateWeight(value) {
//   let error;
//   if (!value) {
//     error = "Все поля должны быть заполнены";
//   } else if (!parseInt(value)) {
//     error = "Укажите вес от 20 до 500кг";
//   } else if (parseInt(value) < 20 || parseInt(value) > 500) {
//     error = "Укажите вес от 20 до 500кг";
//   }
//   return error;
// }
// function validateHeight(value) {
//   let error;
//   if (!value) {
//     error = "Все поля должны быть заполнены";
//   } else if (!parseInt(value)) {
//     error = "Укажите рост от 100 до 250см";
//   } else if (parseInt(value) < 100 || parseInt(value) > 250) {
//     error = "Укажите рост от 100 до 250см";
//   }
//   return error;
// }
// function validateAge(value) {
//   let error;
//   if (!value) {
//     error = "Все поля должны быть заполнены";
//   } else if (!parseInt(value)) {
//     error = "Укажите возраст от 18 до 100лет";
//   } else if (parseInt(value) < 18 || parseInt(value) > 100) {
//     error = "Укажите возраст от 18 до 100лет";
//   }
//   return error;
// }
// function validateDesiredWeight(value) {
//   let error;
//   if (!value) {
//     error = "Все поля должны быть заполнены";
//   } else if (!parseInt(value)) {
//     error = "Укажите желаемый вес от 20 до 500кг ";
//   } else if (parseInt(value) < 20 || parseInt(value) > 500) {
//     error = "Укажите желаемый вес от 20 до 500кг ";
//   }
//   return error;
// }
// // ================dont work====================
// function validateBloodType(value) {
//   let error;
//   if (!value) {
//     error = "Все поля должны быть заполнены";
//   }
// }

// const blood = {
//   type1: 1,
//   type2: 2,
//   type3: 3,
//   type4: 4,
// };
// const initialState = {
//   weight: "",
//   height: "",
//   age: "",
//   desiredWeight: "",
//   bloodType: "",
// };

// class CalcFormik extends Component {
//   state = { ...initialState };

//   onSubmitForm = () => {
//     if (!this.props.id) {
//       this.props.getReccomendation({ ...this.state });
//     } else {
//       this.props.chngUserParam({ ...this.state }, this.props.id);
//     }
//     this.setState({ ...initialState });
//   };

//   render() {
//     return (
//       <div>
//         {this.props.spin && <Spin />}
//         <Formik
//           initialValues={{
//             ...initialState,
//           }}
//           onSubmit={(values) => {
//             this.setState({
//               weight: parseInt(values.weight),
//               height: parseInt(values.height),
//               age: parseInt(values.age),
//               desiredWeight: parseInt(values.desiredWeight),
//               bloodType: Number(values.bloodType),
//             });
//             this.onSubmitForm();
//             values = { ...initialState };
//           }}
//         >
//           {({
//             errors,
//             touched,
//             isValidating,
//             validate,
//             values,
//             handleBlur,
//             handleChange,
//           }) => (
//             <form>
//               <label htmlFor="height">Рост *</label>
//               <Field
//                 name="height"
//                 validate={validateHeight}
//                 // value={values.height}
//               />
//               {errors.height && touched.height && <div>{errors.height}</div>}

//               <label htmlFor="age">Возраст *</label>
//               <Field
//                 name="age"
//                 validate={validateAge}
//                 // value={values.age}
//               />
//               {errors.age && touched.age && <div>{errors.age}</div>}

//               <label htmlFor="weight">Вес *</label>
//               <Field
//                 name="weight"
//                 validate={validateWeight}
//                 // value={values.weight}
//               />
//               {errors.weight && touched.weight && <p>{errors.weight}</p>}

//               <label htmlFor="desiredWeight">Желаемый вес *</label>
//               <Field
//                 name="desiredWeight"
//                 validate={validateDesiredWeight}
//                 // value={values.desiredWeight}
//               />
//               {errors.desiredWeight && touched.desiredWeight && (
//                 <p>{errors.desiredWeight}</p>
//               )}

//               <div id="my-radio-group">Группа крови *</div>
//               <div role="group" aria-labelledby="my-radio-group">
//                 <label>
//                   <Field
//                     type="radio"
//                     validate={validateBloodType}
//                     name="bloodType"
//                     value={blood.type1}
//                     checked={blood.type1 === values.bloodType}
//                     onChange={handleChange}
//                   />
//                   1
//                 </label>

//                 <label>
//                   <Field
//                     type="radio"
//                     validate={validateBloodType}
//                     name="bloodType"
//                     value={blood.type2}
//                     checked={blood.type2 === values.bloodType}
//                     onChange={handleChange}
//                   />
//                   2
//                 </label>

//                 <label>
//                   <Field
//                     type="radio"
//                     validate={validateBloodType}
//                     name="bloodType"
//                     value={blood.type3}
//                     checked={blood.type3 === values.bloodType}
//                     onChange={handleChange}
//                   />
//                   3
//                 </label>

//                 <label>
//                   <Field
//                     type="radio"
//                     validate={validateBloodType}
//                     name="bloodType"
//                     value={blood.type4}
//                     checked={blood.type4 === values.bloodType}
//                     onChange={handleChange}
//                   />
//                   4
//                 </label>
//               </div>

//               <button type="submit">Submit</button>
//             </form>
//           )}
//         </Formik>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   getReccomendation,
//   chngUserParam,
// };

// const mapStateToProps = (state) => {
//   return {
//     id: state.LogInReducer.user.id,
//     dailyRate: state.calculator.dailyRate,
//     spin: getLoading(state),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CalcFormik);
