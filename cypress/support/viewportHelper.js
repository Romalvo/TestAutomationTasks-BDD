import viewports from "../config/viewports";

export function setViewport(device) {
    const viewport = viewports[device];

    if (!viewport) {
        throw new Error('Viewport "{device}" is not defined')
    }

    cy.viewport(viewport.width, viewport.height);
}