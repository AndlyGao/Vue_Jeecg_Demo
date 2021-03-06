import { inputConf } from "./control/Input";
import { selectConf } from "./control/Select";
import { radioConf } from "./control/Radio";
import { checkBoxConf } from "./control/CheckBox";
import { cascaderConf } from "./control/Cascader";
import { textConf } from "./control/Text";
import { titleConf } from "./control/Title";
import { hrConf } from "./control/Hr";
import { pConf } from "./control/P";
import { uploadsConf } from './control/Uploads';
import { datePickerConf } from './control/DatePicker'
import { addressConf } from './control/Address';

const formList = {
  input: inputConf,
  // title: titleConf,
  // hr: hrConf,
  // p: pConf,
  // select: selectConf,
  // radio: radioConf,
  // checkbox: checkBoxConf,
  // datepicker: datePickerConf,
  // cascader: cascaderConf,
  // address: addressConf,
  // uploads: uploadsConf,
  // text: textConf,
};
let list_arr = [];
for (let i in formList) {
  list_arr.push(formList[i]);
}
export default list_arr;
