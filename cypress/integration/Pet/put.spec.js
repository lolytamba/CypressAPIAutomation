describe('update pet', () => {
    it('Then it should be create new pet', () => {
        cy.request({
            method: "PUT",
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