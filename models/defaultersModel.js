import mongoose from "mongoose";
var Schema = mongoose.Schema;

const defaulterSchema = new Schema({
  AccountNumber: {
    type: String,
  },
  AccountOpenDate: {
    type: String,
  },
  Address: {
    type: String,
  },
  Bank_Address: {
    type: String,
  },
  Bank_Name: {
    type: String,
  },
  City: {
    type: String,
  },
  Country: {
    type: String,
  },
  Customer_Name: {
    type: String,
  },
  DisbursementAmount: {
    type: String,
  },
  DisbursementDate: {
    type: String,
  },
  InstallmentAmount: {
    type: String,
  },
  LastInstallmentPaidDate: {
    type: String,
  },
  LoanAmount: {
    type: String,
  },
  LoanExpiryDate: {
    type: String,
  },
  LoanOutstandingBalance: {
    type: String,
  },
  LoanPeriod: {
    type: String,
  },
  LoanType: {
    type: String,
  },
  OfficeNo: {
    type: String,
  },
  OverdueNoofInstallment: {
    type: String,
  },
  PinCode: {
    type: String,
  },
  Registration_No: {
    type: String,
  },
  State: {
    type: String,
  },
  RegistrationNo: {
    type: String,
  },
});

const defaulterModel = mongoose.model("defaulter", defaulterSchema);
export default defaulterModel;
