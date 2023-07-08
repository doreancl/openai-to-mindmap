export enum postTheme {
    main,
    side,
}

export const themes = {
    [postTheme.side]: {
        head: true,
        body: false,
        truncate: "line-clamp-3",
        size: 1,
    },
    [postTheme.main]: {
        head: false,
        body: true,
        size: 2,
        truncate: "",
    }
}
