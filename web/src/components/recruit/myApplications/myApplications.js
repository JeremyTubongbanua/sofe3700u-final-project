import React, { useEffect } from "react";
import { Container, Stack } from "react-bootstrap";
import Applied from "./applied";

function MyApplications(props) {

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-3 mt-5">My Applications</h1>
            <Stack className="p-5 justify-content-center align-items-center">
                <Applied />
            </Stack>
        </Container>
    );
}

export default MyApplications;
