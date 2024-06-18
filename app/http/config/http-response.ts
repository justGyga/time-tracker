import { HandlingErrorType } from "../../../internal/common/enums/error";

export interface IHandlingResponseError {
    property: string;
    type: HandlingErrorType;
    message?: string;
}
