import { handleError } from "./handleError.middlewares";
import validateBody from "./validateBody.middlewares";
import verifyEmail from "./verifyEmail.middleware";
import { verifyCourseId, verifyUserId, verifyUserInCourseId } from "./verifyId.middleware";
import verifyToken from "./verifyToken.middleware";
import verifyUserPermission from "./verifyUserPermission.middleware";

export default {
    handleError,
    validateBody,
    verifyEmail,
    verifyCourseId,
    verifyUserId,
    verifyUserInCourseId,
    verifyToken,
    verifyUserPermission,
}