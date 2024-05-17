
import TextField from "./TextField";
import TextFieldWithBootonField from "./TextFieldWithBootonField";
import NumericFieldWithBootonField from "./numericFieldWithBootonField";
import NumericField from "./numericField";
import { DateField } from "./dateField";
import { ClockField } from "./clockField";
import TextFieldWithBootonFieldDisable from "./TextFieldWithBootonFieldDisable";
import ChipsField from "./chipsField";
import CheckBoxField from "./checkBoxField";
import AutocompleteField from "./autoCompleteField";
import ChipCurrencyFiel from "./chipCurrencyField";
import NumericFieldTelefono from "./numericFieldTelefono";
import AsynchronousField from "./AsynchronousField";




export default function TypeFieldInput({ label,multiline,typeValueInput,typefieldInput,value,value_boolean,option,onChange,estado,name,name_boolean,handleBlur, handleSubmit,error,checked,disabled,setData}) {
  return (
    <>
      {typefieldInput === "text" && <TextField multiline label={label} type='text'  value={value}  onChange={onChange} value_boolean={value_boolean} name={name} name_boolean={name_boolean} handleBlur={handleBlur} handleSubmit={handleSubmit} error={error}  disabled={disabled}/>}
      {typefieldInput === "email" && <TextField label={label} type='email' value={value} onChange={onChange} value_boolean={value_boolean} name={name} name_boolean={name_boolean} handleBlur={handleBlur} handleSubmit={handleSubmit} error={error} disabled={disabled}/>}
      {typefieldInput === "number" && <NumericField label={label} type='number' value={value} onChange={onChange} value_boolean={value_boolean} name={name} name_boolean={name_boolean} handleBlur={handleBlur} handleSubmit={handleSubmit} error={error} disabled={disabled}/>}
      {typefieldInput === "telefono" && <NumericFieldTelefono label={label} type='number' value={value} onChange={onChange} value_boolean={value_boolean} name={name} name_boolean={name_boolean} handleBlur={handleBlur} handleSubmit={handleSubmit} error={error} disabled={disabled}/>}
      {typefieldInput === "currency" && <NumericField label={label} type='currency' value={value} onChange={onChange} value_boolean={value_boolean} name={name} name_boolean={name_boolean} handleBlur={handleBlur} handleSubmit={handleSubmit} error={error} disabled={disabled}/>}
      {typefieldInput === "textCheck" && <TextFieldWithBootonField label={label} type='text' value={value} onChange={onChange} value_boolean={value_boolean} name={name} name_boolean={name_boolean} handleBlur={handleBlur} handleSubmit={handleSubmit} error={error} disabled={disabled}/> }
      {typefieldInput === "emailCheck" && <TextFieldWithBootonField label={label} type='email' value={value} onChange={onChange} value_boolean={value_boolean} name={name} name_boolean={name_boolean} handleBlur={handleBlur} handleSubmit={handleSubmit} error={error} disabled={disabled}/>}
      {typefieldInput === "numberCheck" && <NumericFieldWithBootonField label={label} type='number' value={value} onChange={onChange} value_boolean={value_boolean} name={name} name_boolean={name_boolean} handleBlur={handleBlur} handleSubmit={handleSubmit} error={error} disabled={disabled}/>}
      {typefieldInput === "currencyCheck" && <NumericFieldWithBootonField label={label} type='currency' value={value} onChange={onChange} value_boolean={value_boolean} name={name} name_boolean={name_boolean} handleBlur={handleBlur} handleSubmit={handleSubmit} error={error} disabled={disabled}/>}
      {typefieldInput === "chipCurrency" && <ChipCurrencyFiel label={label} type='currency' value={value} onChange={onChange} estado ={estado}  value_boolean={value_boolean} name={name} name_boolean={name_boolean} handleBlur={handleBlur} handleSubmit={handleSubmit} error={error} disabled={disabled}/>}
      {typefieldInput === "date" && <DateField label={label} value={value} onChange={onChange} value_boolean={value_boolean} name={name} name_boolean={name_boolean} handleBlur={handleBlur} handleSubmit={handleSubmit} error={error} disabled={disabled}/>}
      {typefieldInput === "clock" && <ClockField label={label} value={value} onChange={onChange} value_boolean={value_boolean} name={name} name_boolean={name_boolean} handleBlur={handleBlur} handleSubmit={handleSubmit} error={error} disabled={disabled}/>}
      {typefieldInput === "textCheckDisable" && <TextFieldWithBootonFieldDisable label={label} value={value} onChange={onChange} value_boolean={value_boolean} name={name} name_boolean={name_boolean} handleBlur={handleBlur} handleSubmit={handleSubmit} error={error} disabled={disabled}/>}
      {typefieldInput === "chip" && <ChipsField label={label} value={value} onChange={onChange} estado ={estado} value_boolean={value_boolean} name={name} name_boolean={name_boolean} handleBlur={handleBlur} handleSubmit={handleSubmit} error={error} disabled={disabled}/>}
      {typefieldInput === "checkBox" && <CheckBoxField label={label} value={value} onChange={onChange} value_boolean={value_boolean} name={name} name_boolean={name_boolean} handleBlur={handleBlur} handleSubmit={handleSubmit} error={error} option={option} disabled={disabled}/>}
      {typefieldInput === "autoColplete" && <AutocompleteField label={label} value={value} onChange={onChange} options={option} value_boolean={value_boolean} name={name} name_boolean={name_boolean} handleBlur={handleBlur} handleSubmit={handleSubmit} error={error} disabled={disabled}/>}
      {typefieldInput === "AsynchronousField" && <AsynchronousField label={label} value={value} onChange={onChange} options={option} value_boolean={value_boolean} name={name} name_boolean={name_boolean} handleBlur={handleBlur} handleSubmit={handleSubmit} error={error} disabled={disabled} setData={setData}/>}


    </>
  );
}
