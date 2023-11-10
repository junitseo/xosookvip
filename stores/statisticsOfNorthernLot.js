import { API_URL } from "../app/@function/wsCode";

export async function getHeadAndEndLotteryStatistic(date) {
    try {
        const res = await fetch(`${API_URL}/statisticsOfNorthernLot/getHeadAndEndLotteryStatistic/${date}`);
        if (res) {
            const data = await res.json();
            return data;
        }
        return null;
    } catch (error) {
    }
}

export async function getStatisticsOfLotteryRhythmFrequency(date) {
    try {
        const res = await fetch(`${API_URL}/statisticsOfNorthernLot/getStatisticsOfLotteryRhythmFrequency/${date}`);
        if (res) {
            const data = await res.json();
            return data;
        }
        return null;
    } catch (error) {
    }
}

export async function getNorthernLotteryStatistics(params) {
    try {
        const res = await fetch(`${API_URL}/statisticsOfNorthernLot/getNorthernLotteryStatistics?day_from=${params.day_from}&day_to=${params.day_to}&number=${params.number}&week_day=${params.week_day}`);
        if (res) {
            const data = await res.json();
            return data;
        }
        return null;
    } catch (error) {
    }
}

export async function getStatisticsOnSiblingPairs(params) {
    try {
        const res = await fetch(`${API_URL}/statisticsOfNorthernLot/getStatisticsOnSiblingPairs?string_number=${params.string_number}&date=${params.date}`);
        if (res) {
            const data = await res.json();
            return data;
        }
        return null;
    } catch (error) {
    }
}

export async function getFrequencyOfOccurrenceOfTwoNumbers(params) {
    try {
        const res = await fetch(`${API_URL}/statisticsOfNorthernLot/getFrequencyOfOccurrenceOfTwoNumbers?number_one=${params.number_one}&number_tow=${params.number_tow}&day_from=${params.day_from}&day_to=${params.day_to}`);
        if (res) {
            const data = await res.json();
            return data;
        }
        return null;
    } catch (error) {
    }
}

export async function getLotDetailCycles(params) {
    try {
        const res = await fetch(`${API_URL}/statisticsOfNorthernLot/getLotDetailCycles?list_number=${params.list_number}&day_from=${params.day_from}&day_to=${params.day_to}`);
        if (res) {
            const data = await res.json();
            return data;
        }
        return null;
    } catch (error) {
    }
}

export async function getLotteryStatistic(params) {
    try {
        const res = await fetch(`${API_URL}/statisticsOfNorthernLot/getLotteryStatistic?date_start=${params.date_start}&date_end=${params.date_end}&amplitude=${params.amplitude}`);
        if (res) {
            const data = await res.json();
            return data;
        }
        return null;
    } catch (error) {
    }
}