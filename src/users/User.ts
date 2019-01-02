// TODO: IMPLEMENT FULLY

enum Role {
	ADMIN = 'admin',
	APPLICANT = 'applicant',
	GUEST = 'guest',
	SPONSOR = 'sponsor',
	MENTOR = 'mentor',
	VOLUNTEER = 'volunteer',
}

enum Gender {
	MALE = 'M',
	FEMALE = 'F',
	OTHER = 'O',
}

export default class User {
	private password?: string;

	public email: string = '';

	public roles: Role[] = [];

	public demographic?: string;

	public appStatus?: string;

	public application?: string;

	public confirmation?: string;
}
