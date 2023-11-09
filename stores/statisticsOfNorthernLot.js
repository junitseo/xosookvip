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