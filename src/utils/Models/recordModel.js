import _ from 'lodash'
import moment from 'moment';
/* eslint-disable prettier/prettier */
export const recordBodyModel = (record, patientId, treatmentId, userId) => {
    if (record._id) {
        let body = {
            "timein": moment(record.timeIn).toISOString(),
            "timeout": moment(record.timeOut).toISOString(),
            "chiefComplaint": record.chiefComplaint,
            "observation": record.observation,
            "investigation": record.investigation,
            "diagnosis": record.diagnosis,
            "treatmentPlan": record.treatmentPlan,
            "totalAmount": record.totalAmount,
            "balance": record.balance,
            "amountPaid": record.amountPaid,
            "notes": record.notes,
            "nextAppoinmentDate": record.appoinmentDate,
            "nextAppoinmentTime": record.appoinmentTime,
            "patinetId": patientId,
            "treatmentId": treatmentId,
            "doctorId": userId

        }
        return { body, ContentType: 'application/json' };

    }

    let newformdata = new FormData()
    newformdata.append("timein", moment(record.timeIn).toISOString())
    newformdata.append("timeout", moment(record.timeOut).toISOString())
    newformdata.append("chiefComplaint", record.chiefComplaint)
    newformdata.append("observation", record.observation)
    newformdata.append("investigation", record.investigation)
    newformdata.append("diagnosis", record.diagnosis)

    newformdata.append("treatmentPlan", record.treatmentPlan)
    newformdata.append("totalAmount", record.totalAmount)
    newformdata.append("balance", record.balance)
    newformdata.append("amountPaid", record.amountPaid)

    newformdata.append("notes", record.notes)
    newformdata.append("nextAppoinmentDate", record.appoinmentDate)
    newformdata.append("nextAppoinmentTime", record.appoinmentTime)

    newformdata.append("patinetId", patientId)


    newformdata.append("treatmentId", treatmentId)

    newformdata.append("doctorId", userId)



    if (record.images.length > 0) {
        newformdata.append("imageInclude", "true")
        record.images.map(item => {
            newformdata.append("images", {
                uri: item.uri,
                type: 'image/png',
                name: Math.random().toString(36).substr(2, 5),
            })
        })
    }
    if (record._id) {
        newformdata.append("id", record._id)
    }
    return { body: newformdata, ContentType: 'multipart/form-data' };

};