"use client";
import { useQuery, gql } from "@apollo/client";

const GET_USERS = gql`
	query GetUsers {
		users {
			id
			name
		}
	}
`;

export default function UserList() {
	const { loading, error, data } = useQuery(GET_USERS);

	// Handle loading and error states
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div>
			<h2>User List (GQL)</h2>
			<ul>
				{data.users.map((user: { id: string; name: string }) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
}
