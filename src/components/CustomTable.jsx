import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell
} from "@material-tailwind/react";

const CustomTable = ({ data, headers, title }) => {
    return (
        <Card>
            <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
                <Typography variant="h6" color="white">
                    {title}
                </Typography>
            </CardHeader>
            <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <Table>
                <TableHeader >
                    <TableRow>
                        {headers.map((header, index) => (
                            <TableCell key={index}>{header}</TableCell>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item, index) => (
                        <TableRow key={index}>
                            {headers.map((header, index) => (
                                <TableCell key={index}>{item[header]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </CardBody>
        </Card>
    );
};


export default CustomTable;