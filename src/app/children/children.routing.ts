import{Routes} from'@angular/router';

export const route:Routes =[
    {
        path:'',
        children:[
            {
                path:'child1'
            }
        ]
    }
]