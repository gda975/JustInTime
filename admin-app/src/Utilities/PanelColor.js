
export default function PanelColor(cagetory) {
    let color = "#00594C";

    switch (cagetory) {
        case undefined:
            color = "#00594C";
            break;
        case "Workplace Updates":
            color = "#00594C";
            break;
        case "Policy Links":
            color = "#EF426F";
            break;
        case "Instructional Videos":
            color = "#C4D600";
            break;
        case "Useful Sites":
            color = "#A8673E";
            break;
        case "Helpful Reading":
            color = "#00A5AD";
            break;
        case "Staff Event":
            color = "#13294B";
            break;
        default:
            color = "#4a4e4d"
    }

    return color;
}