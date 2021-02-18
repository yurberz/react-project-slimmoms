import styled from "styled-components";
import plusSvg from "../../svg/plus.svg"
import crossSvg from "../../svg/cross.svg"

const Wrapper = styled.div`
// .container{
//   overflow: auto;
//   margin: 0;
//   padding-right: 12px;
//   height: 210px;
// }
// .container::-webkit-scrollbar {
//   width: 6px;
// }

// .container::-webkit-scrollbar-track-piece{

// }

// .container::-webkit-scrollbar-track {
//   background-color: #F0F1F3;
//   margin: 0;
// }

// .container::-webkit-scrollbar-thumb {
//   background-color: #264061;
//   margin: 0;
// }
.button{
    display: inline-block;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  padding-top: 10px;
 
}
.diary-list_li{
  display: flex;
  align-items: center;
  list-style: none;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
}
.diary-list_ul{
    padding-right: 3px;
  width: 290px;
  height: 210px;
  overscroll-behavior: contain;
  overflow-y: auto;
  overflow-x: hidden;
}
.diary-list_name{
display: inline-block;
  /* width: 137px; */
  padding-top: 20px;
  padding-bottom: 10px;
  margin-right:10px;
  border-bottom: 1px solid #E0E0E0;
  white-space: nowrap;
  overflow: auto;
  flex: 3;
}
.diary-list_gramm{
text-align: center;
  display: inline-block;
  /* width: 49.67px; */
  padding-top: 20px;
  padding-bottom: 10px;
  margin-right: 10px;
  border-bottom: 1px solid #E0E0E0;
  white-space: nowrap;
  overflow: auto;
  flex: 1;
}
.diary-list_kkal{
text-align: center;
  display: inline-block;
  /* width: 60px; */
  padding-top: 20px;
  padding-bottom: 10px;
  margin-right: 10px;
  border-bottom: 1px solid #E0E0E0;
  white-space: nowrap;
  overflow: auto;
  flex: 1;
}
@media screen and (min-width: 768px){
    .diary-list_ul{
       padding-right: 3px;
  width: 589px;
  height: 210px;
  overscroll-behavior: contain;
  overflow-y: auto;
  overflow-x: hidden;  
    }
.diary-list_li{
    display: flex;
    align-items: center;
    list-style: none;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
}
.diary-list_name{
    display: inline-block;
    width: 137px;
    padding-top: 15px;
    padding-bottom: 19px;
    margin-right:31px;
    border-bottom: 1px solid #E0E0E0;
    white-space: nowrap;
    overflow: auto;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
}
.diary-list_gramm{
    text-align: right;
    display: inline-block;
    width: 49.67px;
    padding-top: 15px;
    padding-bottom: 19px;
    margin-right: 31px;
    border-bottom: 1px solid #E0E0E0;
    white-space: nowrap;
    overflow: auto;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
}
.diary-list_kkal{
    text-align: right;
    display: inline-block;
    width: 60px;
    padding-top: 15px;
    padding-bottom: 19px;
    margin-right: 31px;
    border-bottom: 1px solid #E0E0E0;
    white-space: nowrap;
    overflow: auto;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
}
.button{
    height: max-content;
    display: inline-block;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
}
}
@media screen and (min-width: 1280px){
   .diary-list_ul{
       padding-right: 3px;
  width: 552px;
  height: 210px;
  overscroll-behavior: contain;
  overflow-y: auto;
  overflow-x: hidden;  
    }
.diary-list_li{
    display: flex;
    align-items: center;
    list-style: none;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
}
.diary-list_name{
  display: inline-block;
    width: 239px;
    padding-top: 20px;
    padding-bottom: 10px;
    margin-right:31px;
    border-bottom: 1px solid #E0E0E0;
    white-space: nowrap;
    overflow: auto;

}
.diary-list_gramm{
    text-align: center;
    display: inline-block;
    width: 104.36px;
    padding-top: 20px;
    padding-bottom: 10px;
    margin-right: 31px;
    border-bottom: 1px solid #E0E0E0;
    white-space: nowrap;
    overflow: auto;
}
.diary-list_kkal{
    text-align: center;
    display: inline-block;
    width: 104.36px;
    padding-top: 20px;
    padding-bottom: 10px;
    margin-right: 10px;
    border-bottom: 1px solid #E0E0E0;
    white-space: nowrap;
    overflow: auto;
}
.button{
    height: max-content;
    display: inline-block;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
} 
}
`

export default Wrapper;