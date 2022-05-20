describe('find pet by status', () =>{
    it('then it should return filtered data', () =>{
        cy.request({
            method: "GET",
            url: "/pet/findByStatus",
            qs: {
                status: "pending"
            } 
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body))
        });
    });
});

