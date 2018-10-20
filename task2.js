String.prototype.transformEmails = function () {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    let emails = this.split(',');

    emails = emails.map((email) => {
        return email.trim();
    });

    emails = emails.filter((email) => {
        return emailRegex.test(email);
    });

    return emails;
}

console.log('test@email.com,  test@mail, test+1@mail.net'.transformEmails());