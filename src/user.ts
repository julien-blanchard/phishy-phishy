import {parseArgs} from "util";

export const getUserArgs = (array_of_args: string[]): {string: boolean} => {
    let user_args: any = parseArgs(
        {
            args: array_of_args,
            options: {
                fullpage: {
                    type: "boolean",
                },
                multiplefiles: {
                    type: "boolean"
                },
                nohtmltags: {
                    type: "boolean",
                },
            },
            strict: true,
            allowPositionals: true,
        }
    );
    return user_args["values"];
};
