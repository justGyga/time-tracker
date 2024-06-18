export const regex = {
    symbolsLatin: new RegExp(/^[0-9a-zA-Z~.,;:!@#$%^&*()_+=\-\[\]\\`|{}<>?"'№]+$/),
    bigTextLatin: new RegExp(/^[0-9a-zA-Z~.,;: \n!@#$%^&*()_+=\-\[\]\\`|{}<>?"'№]+$/),
    bigTextCyrillic: new RegExp(/^[0-9a-zA-Zа-яА-ЯёЁ~.,;: \n!@#$%^&*()_+=\-\[\]\\`|{}<>?"'№]+$/),
    phoneE164: new RegExp(/^\+[1-9]\d{1,14}$/)
};
