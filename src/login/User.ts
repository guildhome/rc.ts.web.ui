export default class User {
	
	private id: string
	private username: string
	private handle: string
	private email: string
	private guildIds: Array<string>

	constructor(id: string, username: string, handle: string, email: string, guildIds: Array<string>) {
		this.id = id
		this.username = username
		this.handle = handle
		this.email = email
		this.guildIds = guildIds
	}

	public static fromJson = (json: any) : User => {
		return new User(json.id, json.username, json.handle, json.email, json.guildIds)
	}

	public toJson = () : any => {
		return { id: this.id, username: this.username, handle: this.handle, email: this.email, guildIds: this.guildIds }
	}
}