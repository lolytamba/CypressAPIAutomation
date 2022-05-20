describe('delete pet', () =>{
    it('then it should delete pet', () => {
        const petId = 11;
        cy.request({
            method: "DELETE",
            url: "/pet/"+petId,
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body))
        });
    });
});