import _ from 'lodash'
import moment from 'moment'
/* eslint-disable prettier/prettier */
export const patientModel = (data) => {
    if (_.isEmpty(data)) {
        return {}
    }
    data.timeIn = moment(data.timein).format('lll');
    data.timeOut = moment(data.timeout).format('lll');
    data.appoinmentDate = data.nextAppoinmentDate;
    data.appoinmentTime = data.nextAppoinmentTime;
    let recordImages = []
    if (data.attachment.length > 0) {
        data.attachment.map(item => {
            recordImages.push({ name: Math.random().toString(36).substr(2, 5), uri: item })
        })

        data.images = recordImages;
    }

    return data;
};