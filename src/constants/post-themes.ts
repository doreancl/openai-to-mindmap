export enum postTheme {
    main,
    side,
    bottom,
}

const _themes = {
    [postTheme.side]: {
        head: true,
        body: false,
        truncate: "line-clamp-3",
        size: 1,
        loadMore: false
    },
    [postTheme.main]: {
        head: false,
        body: true,
        size: 2,
        truncate: "",
        loadMore: false
    }
}

_themes[postTheme.bottom] = Object.assign({}, _themes[postTheme.main], {loadMore: true})
export const themes = _themes
