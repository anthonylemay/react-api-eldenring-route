import { config } from '../../config';

class CreaturesService {
	endpoint = "creatures";
	baseUrl = config.baseUrl;
	creaturesUrl = `${this.baseUrl}/${this.endpoint}`;

	async getAllCreatures() {
		const res = await fetch(this.creaturesUrl)
		if (!res.ok) throw new Error("Failed to fetch creatures");
		const data = await res.json();
		console.log(data);
		return data.data;
	}

	async getCreaturesById(id) {
		const res = await fetch(`${this.creaturesUrl}/${id}`)
		if (!res.ok) throw new Error(res.statusText);
		return await res.json();
	}
}

export default CreaturesService;