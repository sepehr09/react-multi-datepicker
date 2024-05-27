import type { Meta, StoryObj } from "@storybook/react";
import DatePickerProvider from "../DatePickerProvider";
import DaySlots from "../components/daySlots/DaySlots";
import Header from "../components/header/Header";
import Title from "../components/title/Title";
import WeekDays from "../components/weekDays/WeekDays";
import { argTypes } from "./constants";

const meta = {
  title: "Example/Theming",
  component: DatePickerProvider,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
    deepControls: { enabled: true },
  },
  argTypes: argTypes,
} satisfies Meta<typeof DatePickerProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example1: Story = {
  render: (props) => {
    return (
      <div
        style={{
          background: "#fff",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          width: "300px",
          borderRadius: "0px",
          margin: "30px auto",
          padding: "10px",
        }}
      >
        <DatePickerProvider
          {...{
            isRange: false,
            initialValue: new Date(),
            calendar: "gregory",
            config: {
              weekStartsOn: "monday",
              weekdayFormat: "short",
              weekends: ["saturday", "sunday"],
            },
          }}
          {...props}
          onChange={(e) => {
            console.log("onChange: ", e);
          }}
        >
          <Title />
          <Header
            monthSelectStyles={{
              backgroundColor: "#f0f0f0",
              color: "#000",
              padding: "4px",
              borderRadius: "5px",
              outline: "none",
            }}
            yearSelectStyles={{
              backgroundColor: "#f0f0f0",
              color: "#000",
              padding: "4px",
              borderRadius: "5px",
              outline: "none",
            }}
          />
          <WeekDays style={{ fontWeight: 400 }} />
          <DaySlots
            slotStyles={{
              borderRadius: "50%",
              fontWeight: "300",
            }}
            selectedStyles={{
              borderRadius: "50%",
              backgroundColor: "#783aeb",
              fontWeight: "500",
            }}
            selectedParentStyles={{
              borderRadius: "50%",
            }}
            weekendStyles={{
              fontStyle: "italic",
            }}
          />
        </DatePickerProvider>
      </div>
    );
  },
};

export const Example2: Story = {
  render: (props) => {
    return (
      <div
        style={{
          background: "#fff",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          width: "350px",
          borderRadius: "0px",
          margin: "30px auto",
          padding: "10px",
        }}
      >
        <DatePickerProvider
          {...{
            isRange: true,
            initialValue: [new Date("2024-05-15"), new Date("2024-05-18")],
            calendar: "gregory",
            config: {
              weekStartsOn: "monday",
              weekdayFormat: "short",
              weekends: ["saturday", "sunday"],
            },
          }}
          {...props}
          onChange={(e) => {
            console.log("onChange: ", e);
          }}
        >
          <Title />
          <Header
            monthSelectStyles={{
              backgroundColor: "#f0f0f0",
              color: "#000",
              padding: "4px",
              borderRadius: "5px",
              outline: "none",
            }}
            yearSelectStyles={{
              backgroundColor: "#f0f0f0",
              color: "#000",
              padding: "4px",
              borderRadius: "5px",
              outline: "none",
            }}
          />
          <WeekDays style={{ fontWeight: 400 }} />
          <DaySlots
            slotStyles={{
              fontWeight: "300",
            }}
            selectedStyles={{
              borderRadius: "10px",
              backgroundColor: "#303030",
              fontWeight: "500",
            }}
            startOfRangeParentStyles={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
            endOfRangeParentStyles={{
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
            inSelectedRangeParentStyles={{
              backgroundColor: "#a8adb4",
            }}
            inSelectedRangeStyles={{
              color: "#fff",
            }}
            slotParentStyles={{
              padding: "3px",
            }}
          />
        </DatePickerProvider>
      </div>
    );
  },
};

export const Example3: Story = {
  render: (props) => {
    return (
      <div
        style={{
          background: "#fff",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          width: "300px",
          borderRadius: "0px",
          margin: "30px auto",
          padding: "10px",
          border: "1px solid #acb5be",
        }}
      >
        <DatePickerProvider
          {...{
            isRange: true,
            initialValue: [new Date("2024-05-15"), new Date("2024-05-18")],
            calendar: "gregory",
            config: {
              weekStartsOn: "monday",
              weekdayFormat: "short",
              weekends: ["saturday", "sunday"],
            },
          }}
          {...props}
          onChange={(e) => {
            console.log("onChange: ", e);
          }}
        >
          <Title />
          <Header
            monthSelectStyles={{
              backgroundColor: "#f0f0f0",
              color: "#000",
              padding: "4px",
              borderRadius: "5px",
              outline: "none",
            }}
            yearSelectStyles={{
              backgroundColor: "#f0f0f0",
              color: "#000",
              padding: "4px",
              borderRadius: "5px",
              outline: "none",
            }}
          />
          <WeekDays
            style={{
              fontWeight: 300,
              marginBottom: "4px",
              color: "#7a7a7a",
            }}
          />
          <DaySlots
            parentStyles={{
              gap: "2px",
            }}
            slotParentStyles={{
              border: "1px solid #c7cbcf",
            }}
            slotStyles={{
              fontWeight: "300",
              borderRadius: 0,
            }}
            selectedStyles={{
              backgroundColor: "#d80202",
              fontWeight: "500",
            }}
            // selectedParentStyles={{
            //   borderColor: "#303030",
            // }}
            startOfRangeParentStyles={{
              borderRadius: 0,
            }}
            endOfRangeParentStyles={{
              borderRadius: 0,
            }}
            inSelectedRangeParentStyles={{
              backgroundColor: "#ff9a9a",
            }}
            inSelectedRangeStyles={{
              color: "#fff",
            }}
          />
        </DatePickerProvider>
      </div>
    );
  },
};
