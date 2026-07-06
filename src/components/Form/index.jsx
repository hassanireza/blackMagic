import React from "react";
import { Input, Label, Submit } from "./styles";

const FormComponenet = ({ handleSuccess }) => {
    return <form onSubmit={handleSuccess}>
        <Label htmlFor="name">Name: </Label>
        <Input id="name" name="name" type="text" required autoComplete="off" />

        <Label htmlFor="email">Email address: </Label>
        <Input id="email" name="email" type="email" required autoComplete="off" />

        <Submit type="submit">Submit</Submit>
    </form>
}

export default FormComponenet