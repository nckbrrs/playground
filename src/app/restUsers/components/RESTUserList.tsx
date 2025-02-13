"use client";

import { useEffect, useState } from "react";

export default function UserList() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchUsers() {
			try {
				const response = await fetch("/api/rest");
				if (!response.ok) {
					throw new Error("Failed to fetch users");
				}
				const data = await response.json();
				setUsers(data);
			} catch (error: any) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		}

		fetchUsers();
	}, []);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<div>
			<h2>User List (REST)</h2>
			<ul>
				{users.map((user: { id: number; name: string }) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
}
