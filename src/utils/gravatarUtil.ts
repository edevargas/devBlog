import md5 from 'md5'

export const getGravatar = (email) => {
    const md5Hash = md5(email);
    return `https://www.gravatar.com/avatar/${md5Hash}?s=32&d=identicon&r=PG`
}