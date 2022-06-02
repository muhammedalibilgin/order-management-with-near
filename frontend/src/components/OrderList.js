import { useEffect, useState } from "react";

import "../css/orderlist.css";

import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import { TablePagination } from "@mui/material";

const OrderList = ({ contract }) => {
    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(0);

    const [rowsPerPage] = useState(5);

    useEffect(() => {
        contract.get({ start: 0 }).then((or) => {
            setOrders(or.reverse());
        });
    }, [page, contract]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const styleTableCell = {
        color: "white",
        fontSize: 16,
    };

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                <TableContainer sx={{ maxWidth: 1200 }} component={Paper}>
                    <Table sx={{ minWidth: 700 }}>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "black" }}>
                                <TableCell sx={{ ...styleTableCell }}>Index</TableCell>

                                <TableCell sx={{ ...styleTableCell }}>Product</TableCell>
                                <TableCell align="right" sx={{ ...styleTableCell }}>
                                    ID
                                </TableCell>
                                <TableCell align="right" sx={{ ...styleTableCell }}>
                                    Unit
                                </TableCell>
                                <TableCell align="right" sx={{ ...styleTableCell }}>
                                    Completed
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order, i) => (
                                <TableRow key={order.id}>
                                    <TableCell> {i + 1} </TableCell>
                                    <TableCell> {order.product}</TableCell>
                                    <TableCell align="right"> {order.id} </TableCell>
                                    <TableCell align="right">
                                        {" "}
                                        {order.unit} {order.name}{" "}
                                    </TableCell>
                                    <TableCell align="right"> {`${order.completed}`}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={orders.length}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    page={page}
                />
            </div>
        </div>
    );
};

export default OrderList;
