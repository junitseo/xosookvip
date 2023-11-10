import { API_URL } from "../app/@function/wsCode";

export async function getTriangularLotteryPrediction(params) {
    try {
        const res = await fetch(`${API_URL}/northernlotteryprediction/getTriangularLotteryPrediction?todate=${params.todate}&level=${params.level}&days=${params.days}&type=${params.type}`);
        if (res) {
            const data = await res.json();
            return data;
        }
        return null;
    } catch (error) {
    }
}

export async function getPairLotteryPrediction(params) {
    try {
        const res = await fetch(`${API_URL}/northernlotteryprediction/getPairLotteryPrediction?top_day=${params.top_day}&number=${params.number}`);
        if (res) {
            const data = await res.json();
            return data;
        }
        return null;
    } catch (error) {
    }
}

export async function getLotteryPredictionsForStraightCombinations(params) {
    try {
        const res = await fetch(`${API_URL}/northernlotteryprediction/getLotteryPredictionsForStraightCombinations?top_day=${params.top_day}&number=${params.number}`);
        if (res) {
            const data = await res.json();
            return data;
        }
        return null;
    } catch (error) {
    }
}

export async function getPredictReverseLotteryNumbers(params) {
    try {
        const res = await fetch(`${API_URL}/northernlotteryprediction/getPredictReverseLotteryNumbers?top_day=${params.top_day}&number=${params.number}`);
        if (res) {
            const data = await res.json();
            return data;
        }
        return null;
    } catch (error) {
    }
}

export async function getCheckTheLotteryTwice(params) {
    try {
        const res = await fetch(`${API_URL}/northernlotteryprediction/getCheckTheLotteryTwice?top_day=${params.top_day}&number=${params.number}`);
        if (res) {
            const data = await res.json();
            return data;
        }
        return null;
    } catch (error) {
    }
}

export async function getLotterySlipPrediction(params) {
    try {
        const res = await fetch(`${API_URL}/northernlotteryprediction/getLotterySlipPrediction?top_day=${params.top_day}&number=${params.number}&kieu_soi=${params.kieu_soi}`);
        if (res) {
            const data = await res.json();
            return data;
        }
        return null;
    } catch (error) {
    }
}

export async function getPredictSpecialPrizes(params) {
    try {
        const res = await fetch(`${API_URL}/northernlotteryprediction/getPredictSpecialPrizes?top_day=${params.top_day}&number=${params.number}&kieu_soi=${params.kieu_soi}`);
        if (res) {
            const data = await res.json();
            return data;
        }
        return null;
    } catch (error) {
    }
}

export async function getCheckBridgeHistory(params) {
    try {
        const res = await fetch(`${API_URL}/northernlotteryprediction/getCheckBridgeHistory?index_i=${params.index_i}&index_j=${params.index_j}`);
        if (res) {
            const data = await res.json();
            return data;
        }
        return null;
    } catch (error) {
    }
}