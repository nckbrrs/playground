import db from "~/src/lib/db";
const GET = async () => {
	try {
		await db.connect();

		const res = await db.query("SELECT * FROM users");

		return new Response(JSON.stringify(res.rows), {
			status: 200
		});
	} catch (error: any) {
		return new Response(
			JSON.stringify({ error: "Failed to connect to, or query, DB" }),
			{
				status: 500
			}
		);
	} finally {
		await db.end();
	}
};

export { GET };
