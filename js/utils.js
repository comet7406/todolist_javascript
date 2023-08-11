class DateUtils {
    static leftPad(value) {
        if(value >= 10) {
            return value;
        }

        return `${value}`;
        // return `0${value}`;
    }

    static toStringByFormatting(date) {
        const year = date.getFullYear();
        const month = this.leftPad(date.getMonth() + 1);
        const day = this.leftPad(date.getDate());

        return [year + "년 " +  month + "월 " + day + "일 "];
    }
}