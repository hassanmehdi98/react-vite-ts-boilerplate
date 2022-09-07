import React from "react";
import Button from ".";

export default {
    title: "components/Button",
    component: Button
};

export const Primary = () => (
    <Button variant="primary">😍 Click me</Button>
)

export const Success = () => (
    <Button variant="success">😍 Click me</Button>
)

export const Warning = () => (
    <Button variant="warning">😍 Click me</Button>
)

export const Error = () => (
    <Button variant="danger">😍 Click me</Button>
)