import El from "../../library/El";
import pic from "../../img/product/1.jpg";

const Card = ({ element = "div", child,title,condition,price,date,src, ...rest }) => {
  return El({
    element: element,
    className: `${variants[variant]} inline-block rounded-md text-sm py-2 px-6`,
    child:[
        El({
            element:'div',
            className:'flex border border-gray-300 w-3/12  p-4 rounded-md items-center',
            child:[
                El({
                    element:'div',
                    className:'w-8/12 flex flex-col gap-4', 
                    child:[
                        El({
                            element: 'h2',
                            child:title
                        }),
                        El({
                            element:'div',
                            className:'flex flex-col gap-1',
                            child:[
                                El({
                                    element:'p',
                                    className:'text-sm text-gray-600',
                                    child:condition
                                }),
                                El({
                                    element:'p',
                                    className:'text-sm text-gray-600',
                                    child:price
                                }),
                                El({
                                    element:'p',
                                    className:'text-sm text-gray-600',
                                    child:date
                                }),
                            ]
                        })
                        
                    ]
                }),
                El({
                    element:'div',
                    className:'w-4/12',
                    child:[
                        El({
                            element:'img',
                            src: src,
                            alt: 'image',
                            className:'rounded-md w-36 h-36'
                        })
                    ]
                })
            ]

        })
    ],
    ...rest,
  });
};
export default Card;
