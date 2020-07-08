import React, { Component, createContext } from 'react'
import Coutn from '../pages/Coutn'
const context = createContext()
export class Provider extends Component {
    render() {
        return (
            <context.Provider value={this.props.store}>
                {this.props.children}
            </context.Provider>
        )
    }
}

export function connect(mapState, mapActions) {
    return (ShowComponent) => {
        return class extends Component {
            componentWillMount(){
               
            }
            componentWillUnmount(){
                this.unsubscribe()
            }
            render() {
                return (
                    <context.Consumer >
                        {store => {
                            this.unsubscribe = store.subscribe(()=>{
                                this.forceUpdate()
                            })
                            // console.log(data.dispatch({type:'add',data:1}));
                            let allState = store.getState()
                            let state = mapState(allState)
                            let mapReducer = {}
                            Object.keys(mapActions).forEach(key => {
                                let actionCeater = mapActions[key]
                                mapReducer[key] = (data) => {
                                    store.dispatch(actionCeater(data))
                                }
                            })
                            return (<ShowComponent {...state} {...mapReducer} />)
                        }
                        }
                    </context.Consumer >)
            }

        }
    }
}
