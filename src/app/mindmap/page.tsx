'use client';

import React, {useCallback} from 'react';
import ReactFlow, {
    addEdge,
    ConnectionLineType,
    Panel,
    useNodesState,
    useEdgesState,
} from 'reactflow';

import 'reactflow/dist/style.css';
import {getLayoutedElements} from "@/app/mindmap/order";

const position = {x: 0, y: 0};
const edgeType = 'smoothstep';

let initialNodes = [
    {
        id: '1',
        type: 'input',
        data: {label: 'input'},
        position,
    },
    {
        id: '2',
        data: {label: 'node 2'},
        position,
    },
    {
        id: '2a',
        data: {label: 'node 2a'},
        position,
    },
    {
        id: '2b',
        data: {label: 'node 2b'},
        position,
    },
    {
        id: '2c',
        data: {label: 'node 2c'},
        position,
    },
    {
        id: '2d',
        data: {label: 'node 2d'},
        position,
    },
    {
        id: '3',
        data: {label: 'node 3'},
        position,
    },
    {
        id: '4',
        data: {label: 'node 4'},
        position,
    },
    {
        id: '5',
        data: {label: 'node 5'},
        position,
    },
    {
        id: '6',
        type: 'output',
        data: {label: 'output'},
        position,
    },
    {id: '7', type: 'output', data: {label: 'output'}, position},
];
initialNodes = [
    {
        "id": "1",
        "type": "input",
        "data": {"label": "Code Development Best Practices"},
        "position": {"x": 500, "y": 100}
    },
    {
        "id": "2",
        "type": "default",
        "data": {"label": "Code Organization"},
        "position": {"x": 200, "y": 300}
    },
    {
        "id": "3",
        "type": "default",
        "data": {"label": "Code Style and Formatting"},
        "position": {"x": 500, "y": 300}
    },
    {
        "id": "4",
        "type": "default",
        "data": {"label": "Testing and Quality Assurance"},
        "position": {"x": 800, "y": 300}
    },
    {
        "id": "5",
        "type": "default",
        "data": {"label": "Version Control"},
        "position": {"x": 200, "y": 500}
    },
    {
        "id": "6",
        "type": "default",
        "data": {"label": "Error Handling and Logging"},
        "position": {"x": 500, "y": 500}
    },
    {
        "id": "7",
        "type": "default",
        "data": {"label": "Performance Optimization"},
        "position": {"x": 800, "y": 500}
    },
    {
        "id": "8",
        "type": "default",
        "data": {"label": "Security"},
        "position": {"x": 200, "y": 700}
    },
    {
        "id": "9",
        "type": "default",
        "data": {"label": "Documentation"},
        "position": {"x": 500, "y": 700}
    }
]

let initialEdges = [
    {id: 'e12', source: '1', target: '2', type: edgeType, animated: true},
    {id: 'e13', source: '1', target: '3', type: edgeType, animated: true},
    {id: 'e22a', source: '2', target: '2a', type: edgeType, animated: true},
    {id: 'e22b', source: '2', target: '2b', type: edgeType, animated: true},
    {id: 'e22c', source: '2', target: '2c', type: edgeType, animated: true},
    {id: 'e2c2d', source: '2c', target: '2d', type: edgeType, animated: true},
    {id: 'e45', source: '4', target: '5', type: edgeType, animated: true},
    {id: 'e56', source: '5', target: '6', type: edgeType, animated: true},
    {id: 'e57', source: '5', target: '7', type: edgeType, animated: true},
];
initialEdges = [
    {
        "id": "e12",
        "source": "1",
        "target": "2",
        "type": "edgeType",
        "animated": true
    },
    {
        "id": "e13",
        "source": "1",
        "target": "3",
        "type": "edgeType",
        "animated": true
    },
    {
        "id": "e14",
        "source": "1",
        "target": "4",
        "type": "edgeType",
        "animated": true
    },
    {
        "id": "e25",
        "source": "2",
        "target": "5",
        "type": "edgeType",
        "animated": true
    },
    {
        "id": "e26",
        "source": "2",
        "target": "6",
        "type": "edgeType",
        "animated": true
    },
    {
        "id": "e27",
        "source": "2",
        "target": "7",
        "type": "edgeType",
        "animated": true
    },
    {
        "id": "e38",
        "source": "3",
        "target": "8",
        "type": "edgeType",
        "animated": true
    },
    {
        "id": "e39",
        "source": "3",
        "target": "9",
        "type": "edgeType",
        "animated": true
    }
]


/**
 *
 * @param nodes
 * @param edges
 * @param direction TB or LR
 */
;

const {nodes: layoutedNodes, edges: layoutedEdges} = getLayoutedElements(
    initialNodes,
    initialEdges
);

export default function MindMap() {
    const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);


    const onLayout = useCallback(
        (direction) => {
            const {nodes: layoutedNodes, edges: layoutedEdges} = getLayoutedElements(
                nodes,
                edges,
                direction
            );

            setNodes([...layoutedNodes]);
            setEdges([...layoutedEdges]);
        },
        [nodes, edges]
    );

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            connectionLineType={ConnectionLineType.SmoothStep}
            fitView
        >
            <Panel position="top-right">
                <button onClick={() => onLayout('TB')}>vertical layout</button>
                <button onClick={() => onLayout('LR')}>horizontal layout</button>
            </Panel>
        </ReactFlow>
    );
};
