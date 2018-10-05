
export const mealRouteResolver = {

    BASE_PATH: 'meal',

    DETAIL_PATH: 'detail',

    LIST_PATH: 'list',

    getMealListRoute() {
        return ['/', this.BASE_PATH, this.LIST_PATH];
    },

    getMealDetailRoute(mealId: string) {
        return ['/', this.BASE_PATH, this.DETAIL_PATH, mealId];
    }

};
