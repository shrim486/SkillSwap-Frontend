export const getUnreadCount = () => {

    const unread =
        JSON.parse(
            localStorage.getItem("unread")
        ) || {};

    return Object.keys(unread).length;

};


export const addUnread = (userId) => {

    const unread =
        JSON.parse(
            localStorage.getItem("unread")
        ) || {};

    unread[userId] = true;

    localStorage.setItem(
        "unread",
        JSON.stringify(unread)
    );

};


export const clearUnread = (userId) => {

    const unread =
        JSON.parse(
            localStorage.getItem("unread")
        ) || {};

    delete unread[userId];

    localStorage.setItem(
        "unread",
        JSON.stringify(unread)
    );

};