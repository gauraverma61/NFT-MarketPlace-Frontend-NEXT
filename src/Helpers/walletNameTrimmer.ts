export const walletNameTrimmer = (name: string | undefined) => {
    const text = name?.slice(0, 6) + "..." + name?.slice(-4);
    return text;
};
