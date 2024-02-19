import { render } from "@testing-library/react-native";
import { FolderExercises } from "../FolderExercises";
import { AllTheProviders } from "../../../../test-utils";
import { Exercise } from "../../../../types";

const exercises: Exercise[] = [
  { id: "1", name: "Bench" },
  { id: "2", name: "Squat" },
  { id: "3", name: "Shoulder Press" },
  { id: "4", name: "Leg extension" },
  { id: "5", name: "Bent Over Row" },
];

describe("FolderExercises", () => {
  it("renders", () => {
    const { getByTestId } = render(
    <FolderExercises folderId="1" exercises={exercises} />,
    { wrapper: AllTheProviders}
    );

    const container = getByTestId("folder-exercises-container");
    expect(container).toBeTruthy();
  });
});