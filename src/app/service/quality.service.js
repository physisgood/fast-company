import httpService from "./http.service";

const QualityEndpoint = "quality/";

const QualityService = {
    get: async () => {
        const { data } = await httpService.get(QualityEndpoint);
        return data;
    }
};

export default QualityService;
