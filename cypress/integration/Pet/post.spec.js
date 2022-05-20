describe('create pet', () => {
    it('then it should create new pet', () => {
        cy.request({
            method: "POST",
            url: "/pet",
            body: {
                id: 0,
                category: {
                    id: 0,
                    name: "string"
                },
                name: "doggie",
                photoUrls: [
                    "string"
                ],
                tags : [
                    {
                        id: 0,
                        name: "string"
                    }
                ],
                status: "available"
            }
        }).then((response) =>{
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body))
        });
    });
})