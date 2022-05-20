describe('find pet by id', () =>{
    it('then it should return filtered data', () =>{
        const petId = 11;
        cy.request({
            method: "GET",
            url: "/pet/" + petId,
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body))
        });
    });
});

