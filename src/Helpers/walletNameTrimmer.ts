export const walletNameTrimmer = (name: string | undefined) => {
    const text = name?.slice(0, 8) + "..." + name?.slice(-4);
    return text;
};
