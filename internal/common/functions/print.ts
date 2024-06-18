import { COLORS } from "../enums/colors";

export function print(content: any, color: COLORS = COLORS.RESET) {
    console.info(`${color}${content}${COLORS.RESET}`);
}

export function printError(content: any) {
    print(content, COLORS.RED);
}

export function printInfo(content: any) {
    print(content, COLORS.BLUE);
}
