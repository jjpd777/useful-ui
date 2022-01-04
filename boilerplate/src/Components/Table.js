import React from "react";
import { Table } from 'evergreen-ui';

function TableExample() {
    const profiles = [
        { id: 1, name: "Alejandro", lastActivity: "coding", ltv: "$10B" },
        { id: 2, name: "Juan", lastActivity: "coding for a long time fam", ltv: "$10B" }]
    return (
        <Table>
            <Table.Head>
                {/* <Table.SearchHeaderCell /> */}
                <Table.TextHeaderCell>Name</Table.TextHeaderCell>
                <Table.TextHeaderCell>Last Activity</Table.TextHeaderCell>
                <Table.TextHeaderCell>Lifetime Value</Table.TextHeaderCell>
            </Table.Head>
            <Table.Body >
                {profiles.map((profile) => (
                    <Table.Row key={profile.id} >
                        <Table.TextCell>{profile.name}</Table.TextCell>
                        <Table.TextCell>{profile.lastActivity}</Table.TextCell>
                        <Table.TextCell isNumber>{profile.ltv}</Table.TextCell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    )
};

export default TableExample