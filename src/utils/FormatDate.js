import moment from 'moment';

export const getDay = (date) => {
    return moment(date).format('ddd');
};


export const getHour = (date) => {
    return moment(date).format('h:mm a');
};

export const currentDate = () => {
    return moment().format('LTS')
}