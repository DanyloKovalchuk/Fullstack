import React, {useState} from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from "./Counter";

describe("Counter Component",() => {
    test("Render with initial value",() => {
        render (<Counter initialValue = {5} />);
        expect(screen.getByText("Counter: 5")).toBeInTheDocument();
    });
});